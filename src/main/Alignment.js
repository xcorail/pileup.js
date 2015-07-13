/**
 * Interface for alignments, shared between BAM and GA4GH backends.
 * @flow
 */

import type * as ContigInterval from './ContigInterval';

export type CigarOp = {
  op: string;  // M, I, D, N, S, H, P, =, X
  length: number
}

export type Alignment = {
  pos: number;
  ref: string;

  getKey(): string;
  getName(): string;
  getStrand(): string;
  getCigarOps(): CigarOp[];
  getQualityScores(): number[];
  getSequence(): string;
  getInterval: ContigInterval<string>;
};

export type AlignmentDataSource = {
  rangeChanged: (newRange: GenomeRange) => void;
  getAlignmentsInRange: (range: ContigInterval<string>) => Alignment[];
  on: (event: string, handler: Function) => void;
  off: (event: string) => void;
};
