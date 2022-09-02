CREATE TABLE employee (
	id uuid PRIMARY KEY NOT NULL DEFAULT uuid_generate_v4(),
	nome VARCHAR(255) NOT NULL,
	cargo VARCHAR(255) NOT NULL,
	salary NUMERIC(7,2),
	data_nascimento DATE NOT NULL,
	matricula INTEGER NOT NULL
)