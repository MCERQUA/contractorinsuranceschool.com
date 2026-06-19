#!/usr/bin/env bash
# Generate all images for framingcontractorinsurance.com via HuggingFace FLUX.1-schnell
# Robust: retries up to 4 times, verifies each is a valid image >= 30KB
set -uo pipefail

OUT="/workspace/Websites/framingcontractorinsurance.com/public/images"
mkdir -p "$OUT"

gen() {
  local fname="$1"; shift
  local prompt="$1"; shift
  local steps="${1:-4}"
  local dest="$OUT/$fname"
  local attempt=0
  while [ $attempt -lt 4 ]; do
    attempt=$((attempt+1))
    echo "[$fname] attempt $attempt (steps=$steps)..."
    curl -s --max-time 180 \
      https://router.huggingface.co/hf-inference/models/black-forest-labs/FLUX.1-schnell \
      -H "Authorization: Bearer $HF_TOKEN" \
      -H "Content-Type: application/json" \
      -d "$(jq -nc --arg p "$prompt" --argjson s "$steps" '{inputs:$p, parameters:{num_inference_steps:$s}}')" \
      -o "$dest"
    local ftype
    ftype=$(file -b "$dest" 2>/dev/null)
    local sz
    sz=$(stat -c%s "$dest" 2>/dev/null || echo 0)
    if echo "$ftype" | grep -qiE "image|jpeg|png" && [ "$sz" -ge 30000 ]; then
      echo "[$fname] OK ($sz bytes, $ftype)"
      return 0
    fi
    echo "[$fname] FAIL (size=$sz, type=$ftype)"
    if echo "$ftype" | grep -qi "text\|json"; then
      head -c 200 "$dest"; echo ""
    fi
    sleep 4
  done
  echo "[$fname] GAVE UP after $attempt attempts"
  return 1
}

# === 11 images — framing contractor operations ===

gen "hero.jpg" \
  "Photorealistic cinematic wide shot of a residential wood framing crew raising an exterior wall frame on a new house build. Workers in hi-vis vests and hard hats, nail guns, bright clear morning light, exposed studs and engineered floor trusses, organized jobsite with lumber package. Warm natural wood tones with deep forest-green and copper accents, high-end commercial construction photography, no text, no watermark" 4

gen "framing-walls.jpg" \
  "Photorealistic photo of two framing carpenters assembling a wood stud wall on the deck of a house under construction, measuring and nailing 2x6 studs, nail gun in action, neat sawhorses and lumber, blue sky. Professional construction photography, warm wood tones, shallow depth of field, no text" 4

gen "truss-roof.jpg" \
  "Photorealistic photo of roof trusses being set on a new home frame, crane lowering a wooden roof truss into place, framers guiding it on top plates, sunny day, structural roof skeleton. Professional commercial construction photography, warm tones, no text" 4

gen "jobsite.jpg" \
  "Photorealistic elevated photo of an active residential framing jobsite: a partially framed two-story house skeleton with stacked lumber, chop saw station, air compressor, framers working on multiple levels. Clear daylight, organized site, professional construction photography, no text" 4

gen "crew-portrait.jpg" \
  "Photorealistic professional portrait of a confident framing contractor wearing a hard hat, safety glasses and branded flannel shirt, arms crossed, standing on a home building site with framed walls behind him. Warm friendly genuine trustworthy expression, golden hour light, commercial photography, no text" 4

gen "commercial-build.jpg" \
  "Photorealistic photo of a large commercial or multifamily building under construction, steel-and-wood framing, multiple framers on scaffolding installing floor and wall systems, crane in background, bright industrial daylight. Professional commercial construction photography, no text" 4

gen "scaffold-safety.jpg" \
  "Photorealistic photo of framing carpenters working safely on pump-jack scaffolding and a framed two-story wall, wearing fall protection harnesses and hard hats, installing sheathing. Bright daylight, focus on safety, professional construction photography, no text" 4

gen "lumber-package.jpg" \
  "Photorealistic photo of a fresh lumber package neatly stacked on a residential jobsite, dimensional lumber and engineered I-joists on dunnage, a framers truck in the background, blue sky. Professional commercial photography, warm natural wood tones, no text" 4

gen "blueprint-tools.jpg" \
  "Photorealistic close-up of rolled architectural house plans and blueprints resting on a sawhorse next to a framing square, pencil, tape measure and a framing nailer, soft warm light, shallow depth of field. Professional commercial photography, no text" 4

gen "nail-gun-action.jpg" \
  "Photorealistic action close-up of a framing carpenter firing a pneumatic nail gun into a top plate, wood grain and sawdust visible, gloved hands, bright jobsite light, sharp detail. Professional construction photography, warm tones, no text" 4

gen "og-image.jpg" \
  "Photorealistic cinematic wide banner image of a framing crew raising a wall on a new home build, warm natural wood tones, professional commercial construction photography, wide composition, no text, no watermark" 4

echo "=== ALL IMAGE GENERATION ATTEMPTS COMPLETE ==="
ls -la "$OUT"
