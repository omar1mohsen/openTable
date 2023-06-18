import { Review } from "@prisma/client"

const calReviewRatingAverage = (reviews : Review[])=>{
if(!reviews.length) return 0;
const rating = reviews.reduce((sum,review)=>{
    return sum + review.rating
},0)/reviews.length
return parseFloat((rating).toFixed(1))
}


export default calReviewRatingAverage