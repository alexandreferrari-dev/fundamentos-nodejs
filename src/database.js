export class Database {
  #database = {}; // o # é usado para proteger a propriedade, ela é transformada em uma propriedade privada, agora não pode ser acessada em outros arquivos

  select(table) {
    const data = this.#database[table] ?? [];
    return data;
  }
  insert(table, data) {
    if (Array.isArray(this.#database[table])) {
      this.#database[table].push(data);
    } else {
      this.#database[table] = [data];
    }
    return data;
  }
}
