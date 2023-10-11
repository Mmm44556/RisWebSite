import { useCallback, useMemo } from 'react';
import { reducer } from './userReducer';
function useLogin(user = '') {
  //初始化用於處理登入

  const { user_name, user_sex, user_age, user_phone, user_mail, role_uid,user_register_time,department_name,position_name,lastTimeLogin
  } = user;
  let normalInfo = { user_name, user_sex, user_age, user_mail, user_phone, role_uid };
  let medicalInfo = {department_name,position_name };
  let restInfo = { user_register_time, lastTimeLogin };
  const wholeInfo = { normalInfo, medicalInfo, restInfo }

  const initial = useMemo(() => wholeInfo, [user])
  const reducers = useCallback(reducer, [initial]);

  return [initial, reducers]
}

export { useLogin }