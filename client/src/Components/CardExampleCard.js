import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import beach from '../Images/beach.png';

//console.log(beach);

const CardExampleCard = () => (
  <Card>
    <Image src={beach} wrapped ui={true} />
    <Card.Content>
      <Card.Header style={{fontWeight: "bold"}}> Beach Cleanup With Friends Organized By Habitat friends</Card.Header>
      <Card.Meta>
        <span className='date'>13th Augest</span>
      </Card.Meta>
      <Card.Description>
        12 Seats
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        Lkr 2000/=
      </a>
    </Card.Content>
  </Card>
)

export default CardExampleCard;