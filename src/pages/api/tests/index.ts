import type { NextApiRequest, NextApiResponse } from 'next'

export type Test = {
  id: string
  name: string
  questionIds: string[]
}

export const tests: Test[] = [
  {
    id: '1',
    name: '2018 수능 영어',
    questionIds: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
  },
  {
    id: '2',
    name: '2019 수능 영어',
    questionIds: ['11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
  },
  {
    id: '3',
    name: '2020 수능 영어',
    questionIds: ['21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
  },
  {
    id: '4',
    name: '2021 수능 영어',
    questionIds: ['31', '32', '33', '34', '35', '36', '37', '38', '39', '40'],
  },
]

export type Response = {
  id: string
  name: string
}[]

function Tests(_: NextApiRequest, res: NextApiResponse<Response>) {
  res.status(200).json(tests.map((test) => ({ id: test.id, name: test.name })))
}

export default Tests
