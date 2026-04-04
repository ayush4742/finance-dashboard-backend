const Transaction = require("../models/Transaction");


// Create Transaction
exports.createTransaction = async (req, res) => {
  try {
    const { title, amount, type, category } = req.body;

    const transaction = await Transaction.create({
      title,
      amount,
      type,
      category,
      createdBy: req.headers.userId
    });

    res.status(201).json({
      success: true,
      data: transaction
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};


// Get All Transactions
exports.getTransactions = async (req, res) => {
  try {
    const { page = 1, limit = 10, search, type, category } = req.query;

    const query = {};

    // Search text
    if (search) {
      query.$or = [
        { category: { $regex: search, $options: "i" } },
        { notes: { $regex: search, $options: "i" } }
      ];
    }

    // Filter type
    if (type) {
      query.type = type;
    }

    // Filter category
    if (category) {
      query.category = category;
    }

    const transactions = await Transaction.find(query)
      .skip((page - 1) * limit)
      .limit(Number(limit))
      .sort({ createdAt: -1 });

    const total = await Transaction.countDocuments(query);

    res.json({
      success: true,
      count: transactions.length,
      total,
      data: transactions
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Delete Transaction
exports.deleteTransaction = async (req, res) => {
  try {
    await Transaction.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Transaction deleted"
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};