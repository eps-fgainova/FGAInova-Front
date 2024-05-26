export interface IProjeto {
    linksRedesSociais: {
      facebook: string;
      twitter: string;
      instagram: string;
      linkedin: string;
      youtube: string;
    };
    _id: string;
    titulo: string;
    descricao: string;
    descricaoCurta: string;
    linkVideo: string;
    tags: string[];
    pessoaId: string;
    __v: number;
  }