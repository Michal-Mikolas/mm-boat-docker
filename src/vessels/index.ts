import { kvlcc2FullScale } from './kvlcc2-full-scale.js';
import { j105 } from './j105.js';
import { kvlcc2L64 } from './kvlcc2-l64.js';
import { navy44 } from './navy-44.js';
import { VesselProfile } from './types.js';

export const availableVessels: VesselProfile[] = [j105, navy44, kvlcc2L64, kvlcc2FullScale];

export function getVesselById(id: string): VesselProfile | undefined {
  return availableVessels.find((vessel) => vessel.id === id);
}
