export interface commitsInterface {
    sha: string;
    author: authorInterface;
    url: string;
    message: string;
    nextPage: boolean;
    prevPage: boolean
}

export interface authorInterface {
  date: string
  email: string
  name:string
}

export interface commitsArray {
  commits: commitsInterface[]
}

export interface commitsProp {
    commit: commitsInterface
  }

