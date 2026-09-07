export type ArtworkCategory = "Rainbow" | "Óptica" | "Tesselação" | "Figuras";

export type Artwork = {
  id: string;
  title: string;
  year: number;
  category: ArtworkCategory;
  palette: string[];
  format: string;
  description: string;
  accent: string;
  featured?: boolean;
};

export const artworks: Artwork[] = [
  {
    id: "campina-grande",
    title: "Campina Grande",
    year: 2023,
    category: "Figuras",
    palette: ["#1C5C56", "#F26B3A", "#E9D8A6", "#0F172A", "#F5F2EA"],
    format: "80 x 100 cm",
    description:
      "Uma cena urbana que traduz memória, coletividade e identidade regional em linguagem geométrica vibrante.",
    accent: "Narrativa histórica",
    featured: true,
  },
  {
    id: "mosaico-rainbow",
    title: "Mosaico Rainbow",
    year: 2021,
    category: "Rainbow",
    palette: ["#FF5A36", "#FFD23F", "#2EC4B6", "#3A86FF", "#FF006E"],
    format: "70 x 70 cm",
    description:
      "Casinhas, losangos e blocos de cor em uma composição densa que celebra o brilho do cotidiano.",
    accent: "Máximo colorido",
  },
  {
    id: "optica-contraste",
    title: "Óptica em Contraste",
    year: 2024,
    category: "Óptica",
    palette: ["#111111", "#F5F1EA", "#D7263D", "#8A939C"],
    format: "90 x 90 cm",
    description:
      "Formas circulares e triangulares em tensão visual, explorando ritmo, vazio e percepção.",
    accent: "Estética visual",
  },
  {
    id: "tessela-azul",
    title: "Tessela Azul",
    year: 2022,
    category: "Tesselação",
    palette: ["#0D3B66", "#A5D8FF", "#F4F1DE", "#FF9F1C"],
    format: "60 x 60 cm",
    description:
      "Padrão controlado em poucas cores para conduzir o olhar por intervalos e repetições.",
    accent: "Estrutura e ritmo",
  },
];

export const artworkCategories: Array<"Todas" | ArtworkCategory> = [
  "Todas",
  "Rainbow",
  "Óptica",
  "Tesselação",
  "Figuras",
];
