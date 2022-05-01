const SEARCHING_FOR_VENDOR = 'SEARCHING FOR VENDOR'
const ESTIMATING = 'ESTIMATING'
const IN_PROGRESS = 'IN PROGRESS'
// const FEEDBACK_LOOPS = 'FEEDBACK LOOPS'
const ON_HOLD = 'ON HOLD'
const DELIVERING = 'DELIVERING'
const WAITING_FOR_APPROVAL = 'WAITING FOR APPROVAL'
const DISPUTE = 'DISPUTE'
const COMPLETED = 'COMPLETED'
const CANCEL = 'CANCEL'
const PRODUCT_RETURNAL = 'PRODUCT RETURNAL'

export default {
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false, // it is required to publish though
    default: ''
  },
  // https://github.com/MikeMcl/decimal.js-light/
  budget: {
    type: Decimal,
    required: true
  },
  deadline: {
    type: Date,
    required: true
  },
  tags: [{
    type: Tag,
    default: []
  }],
  skills: [{
    type: Skill,
    default: []
  }],
  currency: {
    type: Currency,
    default: []
  },
  isDigital: {
    type: Boolean,
    required: true
  },
  status: {
    type: String,
    required: true,
    default: SEARCHING_FOR_VENDOR,
    enum: [
      SEARCHING_FOR_VENDOR,
      ESTIMATING,
      IN_PROGRESS,
      ON_HOLD,
      DELIVERING,
      WAITING_FOR_APPROVAL,
      DISPUTE,
      COMPLETED,
      CANCEL,
      PRODUCT_RETURNAL
    ]
  },
  vendors: [{
    type: Vendor,
    default: []
  }],
  estimation: {
    maxDuration: {
      type: Number,
      required: false,
      default: 12
    },
    budget: {
      type: Decimal,
      required: false
    },
    deadline: {
      type: Date,
      required: false
    },
  },
  // Если происходит доработка чтобы не создавать новый заказ
  revision: {
    type: Boolean,
    default: false
  },
  feedbackLoopDuration: {
    type: Number,
    required: false,
    default: 24
  },
  // All events happened during the project existance
  // EXAMPLES BEGIN:
  events: [{
    datetime: Date,
    event: 'STATUS CHANGE',
    result: SEARCHING_FOR_VENDOR,
    causedBy: 'System'
  }, {
    datetime: Date,
    event: 'DISPUTE',
    result: 'resolved by judge xx',
    causedBy: 'Client'
  }, {
    datetime: Date,
    event: 'ESTIMATION',
    result: 'reestimated by vendor xx to yy',
    causedBy: 'Vendor'
  }],
  // EXAMPLE ENDS
  events: []
}