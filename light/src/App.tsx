import React, { useState } from "react";

type HSL = {
  h: number;
  s: number;
  l: number;
};

function generatePalette(hex: string): string[] {
  const hsl = hexToHsl(hex);

  const shades: string[] = [];
  for (let i = 90; i >= 10; i -= 10) {
    shades.push(hslToHex(hsl.h, hsl.s, i));
  }

  return shades;
}

function hexToHsl(hex: string): HSL {
  let r = 0,
    g = 0,
    b = 0;

  if (hex.length === 7) {
    r = parseInt(hex.slice(1, 3), 16) / 255;
    g = parseInt(hex.slice(3, 5), 16) / 255;
    b = parseInt(hex.slice(5, 7), 16) / 255;
  }

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);

  let h = 0;
  let s = 0;
  let l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;

    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }

    h /= 6;
  }

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100),
  };
}

function hslToHex(h: number, s: number, l: number): string {
  s /= 100;
  l /= 100;

  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l - c / 2;

  let r = 0,
    g = 0,
    b = 0;

  if (h < 60) [r, g, b] = [c, x, 0];
  else if (h < 120) [r, g, b] = [x, c, 0];
  else if (h < 180) [r, g, b] = [0, c, x];
  else if (h < 240) [r, g, b] = [0, x, c];
  else if (h < 300) [r, g, b] = [x, 0, c];
  else [r, g, b] = [c, 0, x];

  const toHex = (n: number): string =>
    Math.round((n + m) * 255)
      .toString(16)
      .padStart(2, "0");

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

export default function ColorPalettePicker() {
  const [baseColor, setBaseColor] = useState<string>("#4D96FF");
  const [copied, setCopied] = useState<string>("");

  const palette = generatePalette(baseColor);

  const copy = async (color: string) => {
    await navigator.clipboard.writeText(color);
    setCopied(color);
    setTimeout(() => setCopied(""), 800);
  };

  return (
    <div style={styles.container}>
      <h2>Full Color Palette Picker</h2>

      <input
        type="color"
        value={baseColor}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setBaseColor(e.target.value)
        }
        style={styles.input}
      />


      <div style={styles.grid}>
        {palette.map((color: string) => (
          <div
            key={color}
            onClick={() => copy(color)}
            style={{ ...styles.box, backgroundColor: color }}
          />
        ))}
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    fontFamily: "sans-serif",
    padding: 20,
    textAlign: "center",
  },
  input: {
    width: 80,
    height: 50,
    border: "none",
    cursor: "pointer",
    marginTop: 10,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
    gap: 12,
    marginTop: 20,
  },
  box: {
    height: 110,
    borderRadius: 12,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    color: "#fff",
    fontWeight: "bold",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
  },
  label: {
    background: "rgba(0,0,0,0.35)",
    padding: "4px 8px",
    borderRadius: 6,
    fontSize: 12,
  },
};