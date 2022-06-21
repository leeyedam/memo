import React, {  useState } from 'react';
import styled from '@emotion/styled';
import Card from './components/Card';
import Edit from './components/Edit';
import useStore from './store/memoStore';
import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const CardContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  gap: 40px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
`
const Blank = styled.div`
  width: 30px;
`

function App() {
  const [mode, setMode] =useState<'edit'| 'view'>('view')
  const {setSelectedIndex, memoList, clear} = useStore();

  return (
    <>
    {
      mode === 'view' &&
      <CardContainer>
        <AppBar position="static" color="primary">
            <Toolbar>
              <IconButton
                edge="start"
                sx={{ mr: 2 }}
                color="inherit"
                aria-label="menu"
              >
                <MenuIcon/>
              </IconButton>
              <Typography variant="h6" color="inherit" component="div">
                Memo
              </Typography>
            </Toolbar>
          </AppBar>
            {
              memoList.map((memo, idx)=> <Button variant="outlined">
                <Card 
                key={idx}
                onClick = {()=>{
                  setSelectedIndex(idx)
                  setMode('edit')
                }}
                title ={memo.title}/>
              </Button>)
            }
          <ButtonContainer>
            <Button variant="contained" size="large" onClick={()=> {
              setSelectedIndex(null);
              setMode('edit')
            }}>Plus</Button>
            <Blank/>
            <Button variant="contained" size="large" color="error" onClick={()=> {
              setSelectedIndex(null);
              clear()
            }}>Delete</Button>
          </ButtonContainer>
      </CardContainer>
    }
    {
      mode === 'edit' && <Edit setMode={setMode}/>
    }
    </>
  );
}

export default App;
