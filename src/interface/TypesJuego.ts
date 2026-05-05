export interface Juego {
  id?: number;
  nombre: string;
  imagenUrl: string;
  plataforma: string;
  estado: string;
}

export interface ErrorResponse {
  description: string;
  reasons: string[];
}
