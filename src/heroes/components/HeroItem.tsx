import { Link } from "react-router-dom";
import { Heroe } from "../../assets/data/heroes"

const CharacterByHero = ({alter_ego, characters}: {alter_ego: string, characters: string}) => {
  if (alter_ego === characters) return (<></>);
  return (<p>{characters}</p>);
}


export const HeroItem = ({heroe}: {heroe: Heroe}) => {

  const heroImage = `../../../src/assets/heroes/${heroe.id}.jpg`;

  // const charactersByHero = (<p>{heroe.characters}</p>);

  return (
    <>
        <div
          className="col animate__animated animate__fadeIn"
        >
          <div className="row no-gutters">
            <div className="col-4">
              <img src={heroImage} className="card-img" alt={heroe.superhero} />
            </div>

            <div className="col-8">
              <div className="card-body">
                <h5 className="cartd-title">{heroe.superhero}</h5>
                <p className="card-text">{heroe.alter_ego}</p>

                {
                    <CharacterByHero alter_ego={heroe.alter_ego} characters={heroe.characters} />
                }

                <p className="card-text">
                  <small className="text-mute">{heroe.first_appearance}</small>
                </p>

                <Link to={`/hero/${heroe.id}`}>
                  Más info...
                </Link>

              </div>
            </div>
          </div>
        </div>
    </>
  )
}
