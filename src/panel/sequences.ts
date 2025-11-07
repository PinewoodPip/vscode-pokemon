import { IWeighted } from '../common/util';
import { States } from './states';

export interface SequenceStateEntry extends IWeighted {
    state: States;
}

export interface ISequenceNode {
    state: States;
    possibleNextStates: SequenceStateEntry[];
}

export interface ISequenceTree {
    startingState: States;
    sequenceStates: ISequenceNode[];
}
