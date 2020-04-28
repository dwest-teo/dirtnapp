export default async (req, res) => {
  const { body } = await req;
  res.status(200).json({
    response_type: 'in_channel',
    text: `https://dirtn.app/results/${encodeURI(body)}`,
  });
};
