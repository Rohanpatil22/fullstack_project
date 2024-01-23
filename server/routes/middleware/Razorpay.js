import dotenv from 'dotenv'
import Razorpay from 'razorpay'
import shortid from 'shortid'

dotenv.config();

export const razorpay_payment=async(req,res)=>{

    const razorpay = new Razorpay({
        key_id: process.env.Razor_pay_key,
        key_secret: process.env.Razor_pay_secret,
      });
    
    
    const payment_capture = 1;
    const amount = 500;
    const currency = "INR";
    
    const options = {
      amount: amount * 100,
      currency,
      receipt: shortid.generate(),
      payment_capture,
    };

    try {
        const response = await razorpay.orders.create(options);
        console.log(response);
        res.json({
          id: response.id,
          currency: response.currency,
          amount: response.amount,
        });

        
      } catch (error) {
        console.log(error);
      }
}
