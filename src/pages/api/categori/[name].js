import Novelty from "../models/novelty";

const font = async (req, res) => {
  const { name } = req.query;
  const page = parseInt(req.query.page) || 1; // Получаем номер страницы из запроса, по умолчанию 1
  const limit = 100; // Устанавливаем количество продуктов на странице
  const skip = (page - 1) * limit;

  try {
    const products = await Novelty.find({ categori: name })
      .skip(skip)
      .limit(limit);
    res.status(200).json(products);
  } catch (error) {
    console.error("Ошибка:", error);
    res.status(500).json({ error: "Внутренняя ошибка сервера" });
  }
};

export default font;
