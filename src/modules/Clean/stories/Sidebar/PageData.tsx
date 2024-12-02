import React from 'react';
import { CardRoot } from '../../components/Card/CardRoot/component';
import { Span } from '../../../Common/components/Span/component';
import { Paragraph } from '../../../Common/components/Paragraph/component';



export const PageData = () => (
  <main className='container'>
    <CardRoot>
      <Span size="medium">Title 1</Span>
      <Paragraph color='soft'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque mollitia reprehenderit error sequi, maxime officiis iusto doloremque? Dolores dolorem alias tenetur ducimus impedit quaerat. Consequuntur dolor accusantium corrupti aperiam deleniti?</Paragraph>
    </CardRoot>
    <CardRoot>
      <Span size="medium">Title 2</Span>
      <Paragraph color='soft'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque mollitia reprehenderit error sequi, maxime officiis iusto doloremque? Dolores dolorem alias tenetur ducimus impedit quaerat. Consequuntur dolor accusantium corrupti aperiam deleniti?</Paragraph>
    </CardRoot>
    <CardRoot>
      <Span size="medium">Title 3</Span>
      <Paragraph color='soft'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque mollitia reprehenderit error sequi, maxime officiis iusto doloremque? Dolores dolorem alias tenetur ducimus impedit quaerat. Consequuntur dolor accusantium corrupti aperiam deleniti?</Paragraph>
    </CardRoot>
    <CardRoot>
      <Span size="medium">Title 4</Span>
      <Paragraph color='soft'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque mollitia reprehenderit error sequi, maxime officiis iusto doloremque? Dolores dolorem alias tenetur ducimus impedit quaerat. Consequuntur dolor accusantium corrupti aperiam deleniti?</Paragraph>
    </CardRoot>
  </main>
);
