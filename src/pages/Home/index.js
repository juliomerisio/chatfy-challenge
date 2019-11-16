import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import us from 'date-fns/locale/en-US';
import { MdDelete } from 'react-icons/md';
import { FaTelegramPlane, FaSpinner } from 'react-icons/fa';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import api from '../../services/api';

import {
  Container,
  Content,
  MessageContainer,
  Message,
  StyledInput,
  InputWrapper,
  StyledForm,
  Overflow,
  Button,
  DeleteButton,
} from './styles';
import Header from '../../components/Header';

const schema = Yup.object().shape({
  name: Yup.string()
    .required('Your name is required')
    .min(
      3,
      'The request must include a name with a length greater than 2 characters'
    ),
  text: Yup.string().required('The request must include some text'),
});

export default function Home() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [nameValue, setNameValue] = useState('');

  useEffect(() => {
    async function loadComments() {
      api.get('/comments').then(response => {
        setComments(response.data);
      });
    }
    loadComments();
  }, [comments]);
  function formatedDate(date) {
    const dateFormatted = format(date, " do ',' 'at' HH:mm'h'", {
      locale: us,
    });
    return dateFormatted;
  }

  async function handleDelete(id) {
    setDeleteLoading(true);
    try {
      await api.delete(`/comment/${id}`);
      setDeleteLoading(false);
    } catch (error) {
      toast.error('Database is not connected');
      setDeleteLoading(false);
    }
  }
  async function handleSubmit(data) {
    setLoading(true);
    if (await schema.isValid(data)) {
      try {
        await api.post('/comments', data, {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        });
        setLoading(false);
        setInputValue('');
      } catch (error) {
        toast.error('Database is not connected');
        console.tron.log(error);
        setLoading(false);
      }
    }
    setLoading(false);
  }
  return (
    <>
      <Header />
      <Container>
        <Content>
          <Overflow>
            {comments.length === 0 ? (
              <h1>Start a new conversation</h1>
            ) : (
              comments.map(c => (
                <MessageContainer key={c.id}>
                  <h1>{c.name}</h1>
                  <Message>
                    <p>{c.text}</p>
                    <small>{formatedDate(c.dateAdded)}</small>
                    <DeleteButton
                      deleteLoading={deleteLoading}
                      type="button"
                      onClick={() => handleDelete(c.id)}
                    >
                      {deleteLoading ? (
                        <FaSpinner size={20} />
                      ) : (
                        <MdDelete size={20} />
                      )}
                    </DeleteButton>
                  </Message>
                </MessageContainer>
              ))
            )}
          </Overflow>
          <StyledForm
            autoComplete="off"
            schema={schema}
            onSubmit={handleSubmit}
          >
            <StyledInput
              value={nameValue}
              onChange={e => setNameValue(e.target.value)}
              placeholder="Your Nickname"
              name="name"
            />
            <InputWrapper>
              <StyledInput
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                placeholder="Type a message here"
                name="text"
              />
              <Button type="submit" onClick={handleSubmit} loading={loading}>
                {loading ? (
                  <FaSpinner size={20} />
                ) : (
                  <FaTelegramPlane size={20} />
                )}
              </Button>
            </InputWrapper>
          </StyledForm>
        </Content>
      </Container>
    </>
  );
}
