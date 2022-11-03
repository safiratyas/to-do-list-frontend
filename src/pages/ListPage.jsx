import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getListUser } from '../redux/actions/getUser';
import { getListId } from '../redux/actions/getList';
import NavbarList from "../components/Navbar/NavbarList";
import CardList from "../components/Cards/Description/CardList";

function ListPage() {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState([]);
  const [listData, setListData] = useState([]);

  const {
    userResult,
  } = useSelector((state) => state.getListUserReducer);

  const {
    listIDResult,
  } = useSelector((state) => state.getlistIdReducer);

  useEffect(() => {
    dispatch(getListUser());

  }, []);

  useEffect(() => {
    if (listIDResult) {
      setListData(listIDResult)
    }
  }, [listIDResult])

  useEffect(() => {
    if (userResult) {
      setUserData(userResult);
    }
    dispatch(getListId(userResult.id))
  }, [userResult]);

  return (
    <>
      <NavbarList userData={userData} />
      <CardList userData={userData} listData={listData} />
    </>
  )
}

export default ListPage;