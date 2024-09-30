import { Schema, model } from "mongoose";


const chatSchema = new Schema({
  participants: [
    {
      type: Schema.Types.ObjectId,
      ref: 'users',
      // required: true
    }
  ],
  type: {
    type: String,
    enum: ['individual'], 
    default: 'individual'
  },
  status: {
    type: String,
    enum: ['requested', 'active', 'block'],
    default: 'requested'
  },
  lastSeen: [
    {
      participant: { type: Schema.Types.ObjectId, ref: 'users' },
      seenAt: { type: Date, default: Date.now }
    }
  ],
  messages: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Message'
    }
  ]
}, {
  timestamps: true 
});

export const Chat = model('Chat', chatSchema);
