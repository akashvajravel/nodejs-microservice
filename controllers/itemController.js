import Item from "../models/Item.js";

// CREATE
export const createItem = async (req, res, next) => {
  try {
    const item = await Item.create(req.body);
    res.status(201).json({
      success: true,
      message: "Item created successfully",
      data: item
    });
  } catch (error) {
    next(error);
  }
};

// READ ALL
export const getItems = async (req, res, next) => {
  try {
    const items = await Item.find();
    res.status(200).json({
      success: true,
      data: items
    });
  } catch (error) {
    next(error);
  }
};

// READ ONE
export const getItemById = async (req, res, next) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item)
      return res.status(404).json({ success: false, message: "Item not found" });

    res.status(200).json({ success: true, data: item });
  } catch (error) {
    next(error);
  }
};

// UPDATE
export const updateItem = async (req, res, next) => {
  try {
    const item = await Item.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });

    if (!item)
      return res.status(404).json({ success: false, message: "Item not found" });

    res.status(200).json({
      success: true,
      message: "Item updated successfully",
      data: item
    });
  } catch (error) {
    next(error);
  }
};

// DELETE
export const deleteItem = async (req, res, next) => {
  try {
    const item = await Item.findByIdAndDelete(req.params.id);
    if (!item)
      return res.status(404).json({ success: false, message: "Item not found" });

    res.status(200).json({
      success: true,
      message: "Item deleted successfully"
    });
  } catch (error) {
    next(error);
  }
};
