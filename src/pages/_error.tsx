function Error({ statusCode }: any) {
  return (
    <p>
      {statusCode
        ? `Ошибка ${statusCode}`
        : 'Ошибка на стороне клиента'}
    </p>
  )
}

Error.getInitialProps = ({ res, err }: any) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error
