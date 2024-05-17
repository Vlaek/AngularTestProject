import { HttpActions } from './HttpActions';
import { convertMusicStore } from './converters';

interface IGetParams {
  limit: number;
  page: number;
}

class Api {
  private actions: HttpActions;

  constructor() {
    this.actions = new HttpActions();
  }

  public async getMusicStore(params: IGetParams): Promise<any> {
    try {
      await this.actions.get<any>(
        'https://64c9ec74b2980cec85c28b5f.mockapi.io/music',
        params,
        {}
      ).then(response => 
        convertMusicStore.fromServer(response)
      );
      
      // console.log(convertMusicStore.fromServer(response))
      // return convertMusicStore.fromServer(response);
    } catch (error) {
      // Обработка ошибки
      console.error('Произошла ошибка при получении музыкального магазина:', error);
      throw error; // Можно выбросить ошибку для дальнейшей обработки
    } finally {

    }
  }
}

export { Api };
