body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #f4f4f4;
  font-family: Arial;
}

.calculator {
  background: #ccc;
  padding: 10px;
  border-radius: 8px;
}

input {
  width: 100%;
  height: 50px;
  font-size: 22px;
  text-align: right;
  margin-bottom: 10px;
}

.buttons {
  display: grid;
  grid-template-columns: repeat(4, 60px);
  gap: 5px;
}

button {
  height: 50px;
  font-size: 18px;
  cursor: pointer;
}
