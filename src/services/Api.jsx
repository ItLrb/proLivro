import React, { useState } from 'react';
import { FaMagnifyingGlass } from 'react-icons/fa6'
import styles from './Api.module.css'

function SearchBook() {
  const [searchInput, setSearchInput] = useState('');
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);

  const apiKey = 'AIzaSyCd7XdketxylexoD_cPXzkhMAnym88FZjs';

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchInput}&key=${apiKey}`);
      if (!response.ok) {
        throw new Error('Erro na requisição');
      }
      const data = await response.json();
      setBooks(data.items);
    } catch (error) {
      setError(error);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div>
      <section className={styles.searchBox}>
        <input
          type="text"
          id={styles.search}
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder='Pesquise por um livro.'
        />
        <button onClick={handleSearch}><FaMagnifyingGlass /></button>
      </section>

      <div className={styles.resultSearchTitle}>
        {books.length > 0 && (
          <p>
            <strong>Mostrando resultados de "<em>{searchInput}</em>"</strong>
          </p>
        )}
      </div>


      <div id={styles.res}>
        {books.map((book) => (
          <div key={book.id}>
            <div className={styles.bookBox}>
            {book.volumeInfo.imageLinks ? (
                <img src={book.volumeInfo.imageLinks.smallThumbnail} alt={book.volumeInfo.title}></img>
              ) : (
                <p>Imagem não disponível</p>
              )}
              <h2>{book.volumeInfo.title}</h2>
              <ul>
                <li>Linguagem: {book.volumeInfo.language}</li>
                <li>Autor(es): <strong>{book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Autor Desconhecido'}</strong></li>
              </ul>
                <div className={styles.buyInfo}>
                  <span className={styles.valor}>{book.saleInfo.listPrice ? `R$${book.saleInfo.listPrice.amount}` : ''} </span>
                  <a href={book.saleInfo.buyLink} target="_blank" rel="noopener noreferrer">
                    <button className={styles.buy_btn}>Comprar</button>
                  </a>
                </div>
              <div className={`${styles.saleStatus} ${book.saleInfo.listPrice ? styles.ForSale : styles.NotForSale}`}>
              {book.saleInfo.listPrice ? '' : ''}
            </div>
            </div>
          </div>
        ))}
      </div>


      {error && <p>Ocorreu um erro: {error.message}</p>}
    </div>
  );
}

export default SearchBook
