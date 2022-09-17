import { appendFileSync, readFileSync, writeFileSync } from 'fs'
import { join } from 'path'
import UserProperty from '../entities/UserProperty'

export default class UserPropertyDAO {
  private _userPropertyPropertiesFilePath: string
  private _userPropertyCsvFilePath: string

  constructor() {
    this._userPropertyPropertiesFilePath = join(
      __dirname,
      '..',
      '..',
      'data',
      'user.properties'
    )

    this._userPropertyCsvFilePath = join(
      __dirname,
      '..',
      '..',
      'data',
      'user.csv'
    )
  }

  set(userProperty: UserProperty) {
    const { key, value } = userProperty
    const newProperty = `${key}=${value}\n`

    if (this.get(key) !== null) {
      const content = readFileSync(this._userPropertyPropertiesFilePath, 'utf-8')
      const lines = content.split('\n').filter((line) => key !== line.split('=').shift());
      writeFileSync(this._userPropertyPropertiesFilePath, lines.join('\n'));
    }

    appendFileSync(this._userPropertyPropertiesFilePath, newProperty)
  }

  get(key: string): string | null {
    const content = readFileSync(this._userPropertyPropertiesFilePath, 'utf-8')
    const lines = content.split('\n')
    let result: string | null = null
    for (let l of lines) {
      const aux = l.split('=')
      if (aux[0] == key) {
        result = aux[1]
        break
      }
    }

    return result
  }

  setCsv(userProperty: UserProperty) {
    const { key, value } = userProperty;
    const currentContent = readFileSync(this._userPropertyCsvFilePath, 'utf-8');
    let [columns, rows] = currentContent.split('\n').map((line) => line.split(','));
    if (rows === undefined) rows = [];
    if (columns.includes(key)) {
      const index = columns.indexOf(key);
      columns = columns.filter((_, currentIndex) => currentIndex !== index);
      rows = rows.filter((_, currentIndex) => currentIndex !== index);
    }
    columns.push(key);
    rows.push(value as string);
    const newContent = [columns, rows].map((value) => value.filter(Boolean).join(',') + '\n').join('');
    writeFileSync(this._userPropertyCsvFilePath, newContent);
  }

  getCsv(column: string): string | null {
    const currentContent = readFileSync(this._userPropertyCsvFilePath, 'utf-8');
    let [columns, rows] = currentContent.split('\n').map((line) => line.split(','));
    const index = columns.indexOf(column);
    if (index === -1) return null;
    return rows[index];
  }
}
