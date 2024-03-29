import React, { useState } from 'react';

import styled from 'styled-components';

import SEO from '../../components/seo';
import Layout from '../../components/layout';
import Avatar from '../../components/avatar';
import { DefaultButton } from '../../components/button';
import { Title } from '../../components/typography';

const SectionTitle = styled.div`
  margin: 0 auto;
  max-width: 39rem;
  padding: 2rem 0.5rem 0;
`;

const Form = styled.form`
  margin: 5rem auto 10rem;
  max-width: 35rem;
  min-height: 25rem;
  padding: 0 1.5rem;
  text-align: center;
`;

const Row = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const FieldWrapper = styled.p`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-right: ${(props) => (props.last ? '0' : '0.5rem')};
  width: 100%;
`;
const Label = styled.label`
  color: #2833478a;
  margin-bottom: 0.75rem;
`;
const Input = styled.input`
  background-color: white;
  background-clip: padding-box;
  border: solid 1px #e6ecf8;
  border-radius: 6px;
  box-shadow: none;
  padding: 0.5rem;
  width: 100%;
  @media (min-width: 768px) {
    max-width: 275px;
  }
`;
const TextArea = styled.textarea`
  background-color: white;
  background-clip: padding-box;
  border: solid 1px #e6ecf8;
  border-radius: 6px;
  box-shadow: none;
  max-width: 100%;
  min-width: 100%;
  width: 100%;
`;

const Contact = ({ location: { pathname } }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);

    const request = new Request(
      `https://getform.io/f/3dbdbe6a-dcad-4298-984a-e2e25d44a222`,
    );
    const data = {
      method: 'POST',
      body: formData,
    };

    fetch(request, data)
      .then(() => {
        window.location.replace(`/success`);
      })
      // eslint-disable-next-line no-console
      .catch((e) => console.error(e));
  };

  return (
    <Layout location={pathname}>
      <Avatar defaultImage="/avatar.svg" hoverImage="/hover_avatar.svg" />
      <SEO
        title="Contáctame | Leonardo Mendoza"
        description="Página contáctame del portafolio personal de desarrollo de software de Leonardo Mendoza."
      />
      <SectionTitle>
        <Title fontSize="1.75rem">
          Agradezco que me contactes. Cuéntame, ¿cómo podría ayudarte?
        </Title>
      </SectionTitle>
      <Form onSubmit={handleSubmit} autoComplete="on">
        <Row>
          <FieldWrapper>
            <Label>Nombre</Label>
            <Input
              type="text"
              name="name"
              required
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </FieldWrapper>
          <FieldWrapper last>
            <Label>Email</Label>
            <Input
              type="email"
              name="_replyto"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </FieldWrapper>
        </Row>
        <FieldWrapper>
          <Label>Mensaje</Label>
          <TextArea
            name="message"
            required
            wrap="hard"
            cols="40"
            rows="10"
            spellcheck
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
        </FieldWrapper>

        <DefaultButton type="submit" value="Enviar" minWidth="12.25rem" />
      </Form>
    </Layout>
  );
};

export default Contact;
