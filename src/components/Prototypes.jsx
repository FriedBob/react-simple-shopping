const prototypes = [
  {
    id: "pp-01",
    title: "Kids-story",
    artist: "Thomas Buisson",
    desc: "This porototype was made with ProtoPie, the interactive prototyping tool for all digital product",
    thumbnail:
      "https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/Kids-story_1.mp4",
    price: 10,
    pieUrl: "https://cloud.protopie.io/p/8a6461ad85",
  },
  {
    id: "pp-02",
    title: "mockyapp",
    artist: "Ahmed Amr",
    desc: "This porototype was made with ProtoPie, the interactive prototyping tool for all digital product",
    thumbnail:
      "https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/mockyapp.mp4",
    price: 20,
    pieUrl: "https://cloud.protopie.io/p/27631ac9d5",
  },
  {
    id: "pp-03",
    title: "macOS Folder Concept",
    artist: "Dominik Kandraby",
    desc: "This porototype was made with ProtoPie, the interactive prototyping tool for all digital product",
    thumbnail:
      "https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/macOS_Folder_Concept_-_Folder_concept.mp4",
    price: 10,
    pieUrl: "https://cloud.protopie.io/p/acde5ccdf9",
  },
  {
    id: "pp-04",
    title: "Translator",
    artist: "Tony Kim",
    desc: "This porototype was made with ProtoPie, the interactive prototyping tool for all digital product",
    thumbnail:
      "https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/Translator.mp4",
    price: 30,
    pieUrl: "https://cloud.protopie.io/p/b91edba11d",
  },
  {
    id: "pp-05",
    title: "Voice search for TV",
    artist: "Tony Kim",
    desc: "This porototype was made with ProtoPie, the interactive prototyping tool for all digital product",
    thumbnail:
      "https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/TV.mp4",
    price: 90,
    pieUrl: "https://cloud.protopie.io/p/60ee64cda0",
  },
  {
    id: "pp-06",
    title: "Finance App Visual Interaction 2.0",
    artist: "arpit Agrewal",
    desc: "This porototype was made with ProtoPie, the interactive prototyping tool for all digital product",
    thumbnail:
      "https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/Credit_Card_App.mp4",
    price: 90,
    pieUrl: "https://cloud.protopie.io/p/09ce2fdf84",
  },
  {
    id: "pp-07",
    title: "Whack A Mole",
    artist: "Cahngmo Kang",
    desc: "This porototype was made with ProtoPie, the interactive prototyping tool for all digital product",
    thumbnail:
      "https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/Whack_a_mole.mp4",
    price: 90,
    pieUrl: "https://cloud.protopie.io/p/ab796f897e",
  },
  {
    id: "pp-08",
    title: "Voice Note",
    artist: "Haerin Song",
    desc: `Made by Haerin Song (Soda Design)`,
    thumbnail:
      "https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/Voice_note_with_sound_wave.mp4",
    price: 90,
    pieUrl: "https://cloud.protopie.io/p/7a0d6567d2",
  },
];

export default function Prototypes() {
  return (
    <main>
      <div className="prototypes">
        {prototypes.map((prototype) => {
          const { id, thumbnail, title, price, desc, pieUrl } = prototype;
          return (
            <div key={id} className="prototype">
              <a href={pieUrl} target="_blank" rel="noreferrer">
                <div style={{ padding: "25px 0 33px 0" }}>
                  <video
                    style={{ objectFit: "contain" }}
                    autoPlay
                    muted="muted"
                    loop
                    playsInline
                    className="prototype__artwork prototype__edit"
                    src={thumbnail}
                  />
                </div>
              </a>

              <div className="prototype__body">
                <div className="prototype__title">
                  <div className="btn btn--primary float--right">
                    <i className="icon icon--plus" />
                  </div>

                  {title}
                </div>
                <p className="prototype__price">$ {price}</p>
                <p className="prototype__desc">{desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
