export const config = {
  "dev": {
    "username": process.env.POSTGRES_USERNAME,
    "password": process.env.POSTGRES_PASSWORD,
    "database": "postgres",
    "host": "udagram-turbins-dev.czwvbxdadkfl.us-east-1.rds.amazonaws.com",
    "dialect": "postgres",
    "aws_region": process.env.AWS_REGION,
    "aws_profile": process.env.AWS_PROFILE,
    "aws_media_bucket": "udagram-turbins-dev",
    "jwt": {
      "secret": process.env.JWT_SECRET
    }
  },
  "prod": {
    "username": process.env.POSTGRES_USERNAME,
    "password": process.env.POSTGRES_PASSWORD,
    "database": "postgres",
    "host": "udagram-turbins-dev.czwvbxdadkfl.us-east-1.rds.amazonaws.com",
    "dialect": "postgres"
  }
}
