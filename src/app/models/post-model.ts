export class Post {
    id: number;
    nome_pessoa: string;
    texto: string;
    qtd_likes: number;
    curtido: boolean;
    modo_edit: boolean;

    constructor (id, nome_pessoa, texto, qtd_likes, curtido, modo_edit){
        this.id = id;
        this.nome_pessoa = nome_pessoa;
        this.texto = texto;
        this.qtd_likes = qtd_likes;
        this.curtido = curtido;
        this.modo_edit = modo_edit;
    }
}