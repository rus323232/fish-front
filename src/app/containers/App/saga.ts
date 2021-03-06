import { call, put } from 'redux-saga/effects';
import fetchData from 'src/utils/fetchData';
import * as duck from './duck';

// saga запросов к серверу
export function* callAPI(url, params?) {
  try {
    return yield call(fetchData, url, params);
  } catch (error) {
    if (error.code === 'ECONNABORTED') {
      yield put(duck.showError('Проблемы с сервером, попробуйте позже.'));
    }
    if (error.code === 'ECONNREFUSED') {
      yield put(duck.showError('Нет связи с сервером.'));
    }
    const { response } = error;
    if (!response) {
      yield put(duck.showError('Обрыв связи, проверьте настройки сети'));
    } else {
      const { status } = response;
      switch (status) {
        case 401:
          yield put(duck.showError('Ошибка авторизации, попробуйте авторизоваться снова'));
          //   yield put(duck.logOut());
          window.localStorage.clear();
          return { status };
        case 403:
          yield put(duck.showError('У вас нет прав для просмотра этой страницы'));
          return { status };
        default:
          yield put(duck.showError('Внутрення ошибка сервера, попробуйте позже'));
          return { status };
      }
    }
  }
}

export default function* rootSaga() {
  
}
