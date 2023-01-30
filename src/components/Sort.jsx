import { ViewHeadline, GridView } from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';
import { useFilterContext } from '../context/FilterContext';

const TopFilterRow = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px 20px;
background-color: #eeedff;
`;

const Left = styled.div`

  .sort-btn{
    padding: 4px 4px;
    line-height: 0;
    background-color: #a9abcb;
    color: #fff;
    margin: 0 5px;
    border: none;
    cursor: pointer;
    &:hover{
      background: linear-gradient(144deg,#AF40FF,#5B42F3 50%,#00DDEB);
      border: none;
    }
  }
  .active {
      background: linear-gradient(144deg,#AF40FF,#5B42F3 50%,#00DDEB);
      color: #fff;
    }
`;


const Center = styled.div``;

const Right = styled.div`
.sort-style{
    padding: 5px 6px;
    border: 1px solid #bdc5d7;
}
`;

const Sort = () => {
    const { grid_view, setGridView, setListView, filter_products, sorting } = useFilterContext();
    return (
        <TopFilterRow>
            <Left>
                <button className={grid_view ? 'active sort-btn' : 'sort-btn'}
                    onClick={setGridView}
                >
                    <GridView />
                </button>
                <button className={!grid_view ? 'active sort-btn' : 'sort-btn'}
                    onClick={setListView}
                >
                    <ViewHeadline />
                </button>
            </Left>
            <Center>{filter_products.length}products</Center>
            <Right>
                <form action='#'>
                    <label htmlFor='sort'></label>
                    <select title='sort' id='sort' className='sort-style' onClick={sorting}>
                        <option value='lowest'>Price(lowest)</option>
                        <option value='highest'>Price(highest)</option>
                        <option value='a-z'>A to Z</option>
                        <option value='z-a'>Z to A</option>
                    </select>
                </form>
            </Right>
        </TopFilterRow>
    )
}

export default Sort