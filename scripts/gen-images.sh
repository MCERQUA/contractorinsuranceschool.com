#!/usr/bin/env bash
# Generate all images for gluelammanufacturerinsurance.com via HuggingFace FLUX.1-schnell
# Robust: retries up to 4 times, verifies each is a valid image >= 30KB
set -uo pipefail

OUT="/workspace/Websites/gluelammanufacturerinsurance.com/public/images"
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

# === 9 images — glue-laminated timber (glulam) MANUFACTURING ===

gen "hero.jpg" \
  "Photorealistic cinematic wide shot inside a modern glue-laminated timber glulam manufacturing facility. Enormous long curved glulam beams moving along an overhead conveyor, warm industrial lighting, workers in hi-vis vests and hard hats operating hydraulic presses, neat stacks of laminated timber. Clean bright professional industrial photography, warm amber and deep steel-blue tones, high-end commercial photography, no text, no watermark" 4

gen "glulam-beams.jpg" \
  "Photorealistic photo of finished long straight glue-laminated timber beams neatly stacked inside a bright modern mass-timber manufacturing plant. Visible laminated wood layers and finger joints, smooth sanded surface, warm natural wood grain, industrial ceiling lights, shallow depth of field, professional commercial photography, no text" 4

gen "production-line.jpg" \
  "Photorealistic photo of a glulam production line: structural adhesive glue being evenly spread between stacked lumber lamstock layers on a long industrial bed, worker in hi-vis vest and hard hat monitoring the glue-spreader machine, hydraulic laminating press in background. Clean bright factory, warm industrial lighting, detailed machinery, professional industrial photography, no text" 4

gen "kiln.jpg" \
  "Photorealistic photo of an industrial lumber drying kiln at a glulam manufacturing plant: large stainless-steel kiln chamber with stacked lumber on stickers visible through the open door, light steam, temperature and moisture gauges, technician checking wood moisture content with a meter. Bright industrial setting, professional photography, no text" 4

gen "lumber-yard.jpg" \
  "Photorealistic elevated photo of a large organized lumber yard at a glulam manufacturing facility: neat rows of stacked dimensional lumber on dunnage under a blue sky, forklift moving bundled lamstock, forested mountains in the background, bright clear daylight, professional commercial photography, no text" 4

gen "cnc-finish.jpg" \
  "Photorealistic close-up of a large CNC machining center cutting a precise curved profile into a thick glue-laminated timber beam, wood chips airborne, operator overseeing at a control panel, modern mass-timber factory floor, warm lighting, sharp detail, professional industrial photography, no text" 4

gen "mill-portrait.jpg" \
  "Photorealistic professional portrait of a glulam manufacturing plant manager wearing a hard hat and branded work shirt, standing confidently with arms crossed on the factory floor with finished glulam beams behind him. Warm friendly genuine expression, trustworthy, bright industrial background, golden hour light through factory windows, commercial photography, no text" 4

gen "architectural-glulam.jpg" \
  "Photorealistic architectural interior of a completed building with exposed soaring glue-laminated timber beams and columns: a modern worship or sports space with dramatic tall curved glulam arches, warm natural wood ceiling, large windows with daylight streaming in. Premium architectural photography, warm tones, awe-inspiring scale, no text" 4

gen "press-control.jpg" \
  "Photorealistic photo of a massive hydraulic laminating press in a glulam factory closing on a long stack of glued lumber, operator at a control panel with pressure gauges, dramatic industrial lighting, steel and warm wood, professional heavy-industry photography, no text" 4

echo "=== ALL IMAGE GENERATION ATTEMPTS COMPLETE ==="
ls -la "$OUT"
