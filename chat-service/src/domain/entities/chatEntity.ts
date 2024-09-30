import {Types} from 'mongoose';

interface ILastSeen {
    participant: Types.ObjectId;
    seenAt: Date;
  }

export interface ChatEntity {
    _id?: string | Types.ObjectId;
    participants: Types.ObjectId[] | string[];
    type?: "individual" | "group";
    status?: 'requested' | "active" | 'block';
    lastSeen?: ILastSeen[];
    messages?: Types.ObjectId[] | string[];
    createdAt?: Date | string;
    updatedAt?: Date | string;
}

