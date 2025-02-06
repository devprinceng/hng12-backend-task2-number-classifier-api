const axios = require("axios");
const { isPrime, isPerfect, isArmstrong, digitSum } = require("../utils/");

const classifyNumberController = async (req, res) => {
  const { number } = req.query;
  if (!number || isNaN(number)) {
    return res.status(400).json({ number, error: true });
  }

  const num = parseInt(number);
  const properties = [];
  if (isArmstrong(num)) properties.push("armstrong");
  properties.push(num % 2 === 0 ? "even" : "odd");

  try {
    const funFactResponse = await axios.get(
      `http://numbersapi.com/${num}/math?json`
    );
    const funFact = funFactResponse.data.text;

    return res.json({
      number: num,
      is_prime: isPrime(num),
      is_perfect: isPerfect(num),
      properties,
      digit_sum: digitSum(num),
      fun_fact: funFact,
    });
  } catch (error) {
    return res.status(500).json({ error: "Failed to fetch fun fact" });
  }
};

module.exports = classifyNumberController;
