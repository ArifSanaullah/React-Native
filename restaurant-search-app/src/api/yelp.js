import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer Lbu0URuDk8l9BACRkUMnrmkJ2INAGUL855TXo9E1uplHVeKQ1D688wCrzobmbaHgEP4TTxBqZiwxM6rj86dgzoW9hZS_tVUWCd8Bc4LfuBbSwGB_N4mCQAfwG9iVXnYx",
  },
});
