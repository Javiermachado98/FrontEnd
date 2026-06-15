export interface Planet {
  id: number;
  name: string;
  type: string; // Terrestre, Gaseoso, Enano
  distanceFromSunMm: number; // Distancia en millones de kilómetros
  hasRings: boolean;
}