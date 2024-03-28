import Card from "./Card";

const Cards = () => {
  const cardData = [
    {
      id: 1,
      title: "BlockChain ",
      img: "https://img.freepik.com/free-vector/bitcoin-p2p-concept-illustration_114360-713.jpg?t=st=1711560123~exp=1711563723~hmac=1baf70cb4ae6492eeb427a6f48b1235ce7d96f24ad92ad29eb0c258d14e1d9eb&w=740",
    },
    {
      id: 2,
      title: "Security AAS",
      img: "https://img.freepik.com/free-vector/desktop-smartphone-app-development_23-2148683810.jpg?w=740&t=st=1711548962~exp=1711549562~hmac=18f79e352450d0c1276fc97ba9f6343b30c7c3f9e74c8c33269771a5744d05d4",
    },
    {
      id: 3,
      title: "Motion Graphics",
      img: "https://img.freepik.com/free-vector/desktop-smartphone-app-development_23-2148683810.jpg?w=740&t=st=1711548962~exp=1711549562~hmac=18f79e352450d0c1276fc97ba9f6343b30c7c3f9e74c8c33269771a5744d05d4",
    },
    {
      id: 4,
      title: "BlockChain ",
      img: "https://img.freepik.com/free-vector/bitcoin-p2p-concept-illustration_114360-713.jpg?t=st=1711560123~exp=1711563723~hmac=1baf70cb4ae6492eeb427a6f48b1235ce7d96f24ad92ad29eb0c258d14e1d9eb&w=740",
    },
    {
      id: 5,
      title: "Security AAS",
      img: "https://img.freepik.com/free-vector/desktop-smartphone-app-development_23-2148683810.jpg?w=740&t=st=1711548962~exp=1711549562~hmac=18f79e352450d0c1276fc97ba9f6343b30c7c3f9e74c8c33269771a5744d05d4",
    },
    {
      id: 6,
      title: "Motion Graphics",
      img: "https://img.freepik.com/free-vector/desktop-smartphone-app-development_23-2148683810.jpg?w=740&t=st=1711548962~exp=1711549562~hmac=18f79e352450d0c1276fc97ba9f6343b30c7c3f9e74c8c33269771a5744d05d4",
    },
    {
      id: 7,
      title: "Security AAS",
      img: "https://img.freepik.com/free-vector/desktop-smartphone-app-development_23-2148683810.jpg?w=740&t=st=1711548962~exp=1711549562~hmac=18f79e352450d0c1276fc97ba9f6343b30c7c3f9e74c8c33269771a5744d05d4",
    },
    {
      id: 8,
      title: "Motion Graphics",
      img: "https://img.freepik.com/free-vector/desktop-smartphone-app-development_23-2148683810.jpg?w=740&t=st=1711548962~exp=1711549562~hmac=18f79e352450d0c1276fc97ba9f6343b30c7c3f9e74c8c33269771a5744d05d4",
    },
  ];
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   gap-3 ">
      {cardData.map((card) => (
        <Card key={card.id} title={card.title} img={card.img} />
      ))}
    </div>
  );
};

export default Cards;
