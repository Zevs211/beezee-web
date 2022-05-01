# STATUSES

## SEARCHING FOR VENDOR (auto after publication)
- Vendor is not found for the project yet
- Can only last for 72 hours and then -> cancel

## ESTIMATING (auto after vendor is found)
- Vendor is found and set
- Vendor agrees to work on the project
- Vendor is estimating budget and deadline to confirm
- Chat is opened
- No more than X hours if specified by client or 24 hours by default
- No estimation if vendor agrees with client estimation

## QUESTIONS (right after the ESTIMATING status by Vendor's request)
- Key questions to a client about a project details
- One hour restriction timer

## IN PROGRESS (after estimation is set)
- Vendor has started implementation
- Client balance freezes for a budget amount
- Vendor has half of this balance freezed
- If vendor did not send any feedback to the client during 24 hours (or Y hrs if set) the project is marked as troublesome (has troubles to be resolved by client)

## FEEDBACK LOOPS (feature v2)
- Vendor has some work stages/discussions with client
- Custom statuses workflow (optional)

## ON HOLD (only by request)
- Client sets timer to pause by vendor request
- Vendor sets timer to pause by client request
- Deadline shifts for times spent on hold

## DELIVERING (after vendor applies for approval and initiates delivery)
- When the project type is not digital and it was put for delivery

## ASSEMBLING (by client request)
- Vendor assembles end-product in-place

## WAITING FOR APPROVAL (after delivery was confirmed by client or after vendor applied for approval if digital)
- If type is not digital delivery was finished
- Vendor now has full budget but it is freezed
- Client checks and confirms end product quality
- Client has only 72 hours to approve after that it is automatically completed
  (I thought 24 at first but what if client had some accident?)

## DISPUTE (only by request)
Can happen in:
- "In progress" for when vendor had no FLs for some time (can be set custom)
If vendor had not FLs for the set amount of time and the dispute was opened then the budget unfreezes for the client and the project moves to SEARCHING FOR VENDOR by the client
- "Delivering" when it is longer than estimated (to be discussed)
- "Feedback loops" when vendor or client have some troubles
Judge joins during an hour after creation notifying all participants by chosen method
After resolution status is changed by moderator

## COMPLETED (only after "waiting for approval" has timed out or resolved by client)
- Chat is closed
- Budget amount is now set to be vendor's
- Client can send tips
- Client cannot publish a new project without sending a feedback for a previous one

## CANCEL
- from SEARCHING FOR VENDOR moves the project to drafts (there's a limit of drafts)
- from ESTIMATING moves the project to drafts
- from QUESTIONS moves the project to drafts
- from IN PROGRESS only through dispute:
    - if vendor agrees balance is unfreezed for client
    - if vendor disagrees balance is negotiated and some amount is compensated to vendor and then project moves to drafts
- from FEEDBACK LOOPS is the same as for IN PROGRESS
- from ON HOLD is the same as for IN PROGRESS
- from WAITING FOR APPROVAL only through dispute:
    - Client is not happy with quality of the end product
    - Can be decided only by judge during video call
    - Is resolved either to status IN PROGRESS (FL) with returnal of product or to canceled with consequtive budget negotiation:
      - Vendor agrees & Client agrees: status is set to IN PROGRESS/PRODUCT RETURNAL -> IN PROGRESS
      - Vendor agrees & Client disagrees: cancelation with budget negotiation to compensate vendor
      - Vendor disagrees: budget returns to client
    - Delivery caused a defect to the end product

## PRODUCT RETURNAL
- When the project type is not digital and it was put for product returnal by client's initiated dispute
