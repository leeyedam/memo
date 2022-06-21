import styled from '@emotion/styled';
import { useState } from 'react';
import Button from './Button'
import useStore from '../store/memoStore';

const TtileInp =  styled.input``

const ContentInp =  styled.textarea`
  height: 360px;
`

const EditContainer =  styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column;  
`

const ButtonContainer =  styled.div`
  display: flex;
  gap: 16px;
`

interface EditProps{
  setMode: (mode: 'edit'| 'view')=> void;
}

const Edit = ({setMode}:EditProps)=>{
  const {selectedIndex, editMemo, addMemoList, memoList} = useStore();

  const [title, setTitle] =useState(()=>{
    if(Number.isInteger(selectedIndex)){
      return memoList[selectedIndex as number].title
    }
    return '';
  });
  const [contents, setContents] = useState(()=>{
    if(Number.isInteger(selectedIndex)){
      return memoList[selectedIndex as number].contents
    }
    return '';
  })

  return<>
    <EditContainer>
      <TtileInp value={title} onChange={event=> setTitle(event.currentTarget.value)}/>
      <ContentInp value={contents} onChange={event=> setContents(event.currentTarget.value)}/>
      <ButtonContainer>
        <Button onClick={()=> setMode('view')}>뒤로가기</Button>
        <Button onClick={()=>{
          if(!(title.length && contents.length)){
            alert("제목과 내용을 적어주세요")
            return;
          }

          const memo = {
            title,
            contents
          }

          if(Number.isInteger(selectedIndex))
            {
              editMemo(selectedIndex as number, memo)
            }
          else
            {
              addMemoList(memo);
            }
          alert("저장되었습니다.")
          setMode('view')
        }}>저장</Button>
      </ButtonContainer>
    </EditContainer>
  </>
}

export default Edit