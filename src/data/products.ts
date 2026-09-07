export type ProductCategory = "Pinturas" | "Canecas" | "Almofadas" | "Cadernos" | "Camisetas";

export type Product = {
  id: string;
  name: string;
  category: ProductCategory;
  description: string;
  palette: string[];
  artworkId?: string;
  priceLabel: string;
};

export const products: Product[] = [
  {
    id: "pintura-campina",
    name: "Pintura Campina Grande",
    category: "Pinturas",
    description: "Obra original em formato grande, inspirada em memória e identidade local.",
    palette: ["#1C5C56", "#F26B3A", "#E9D8A6", "#0F172A"],
    artworkId: "campina-grande",
    priceLabel: "Consulte o valor",
  },
  {
    id: "caneca-mosaico",
    name: "Caneca Mosaico Rainbow",
    category: "Canecas",
    description: "Caneca cerâmica com acabamento colorido e desenho inspirador da série Rainbow.",
    palette: ["#F26B3A", "#FFD23F", "#2EC4B6", "#3A86FF"],
    artworkId: "mosaico-rainbow",
    priceLabel: "Consulte o valor",
  },
  {
    id: "almofada-optica",
    name: "Almofada Óptica em Contraste",
    category: "Almofadas",
    description: "Textura visual forte com contraste alto para decorar ambientes modernos.",
    palette: ["#111111", "#F5F1EA", "#D7263D"],
    artworkId: "optica-contraste",
    priceLabel: "Consulte o valor",
  },
  {
    id: "caderno-tessela",
    name: "Caderno Tessela Azul",
    category: "Cadernos",
    description: "Capa com padrão geométrico em azul e laranja para uso diário ou presente.",
    palette: ["#0D3B66", "#A5D8FF", "#FF9F1C"],
    artworkId: "tessela-azul",
    priceLabel: "Consulte o valor",
  },
  {
    id: "camiseta-rainbow",
    name: "Camiseta Rainbow Maximalista",
    category: "Camisetas",
    description: "Peça em algodão com composição visual intensa e caráter pop art.",
    palette: ["#FF5A36", "#FFD23F", "#2EC4B6", "#3A86FF"],
    artworkId: "mosaico-rainbow",
    priceLabel: "Consulte o valor",
  },
];

export const productCategories = ["Todas", "Pinturas", "Canecas", "Almofadas", "Cadernos", "Camisetas"] as const;
