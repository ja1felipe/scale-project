import mongoose, { Model, Document } from 'mongoose';

interface IMatch {
  _id?: mongoose.Types.ObjectId;
  name: string;
  time: number;
  attempts: number;
  number: number;
}

const matchSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    time: {
      type: Number,
      required: true
    },
    attempts: {
      type: Number,
      required: true
    },
    number: {
      type: Number,
      required: true
    }
  },
  {
    timestamps: true,
    toJSON: {
      transform: (_, ret): void => {
        (ret.id = ret._id), delete ret._id;
        delete ret.__v;
      }
    }
  }
);

interface MatchModel extends Document, Omit<IMatch, '_id'> {}

export const Match: Model<MatchModel> = mongoose.model('Match', matchSchema);
