import * as cdk from "aws-cdk-lib";
import * as s3 from "aws-cdk-lib/aws-s3";
import {
  BlockPublicAccess,
  Bucket,
  BucketEncryption,
} from "aws-cdk-lib/aws-s3";
import { Construct } from "constructs";

export class TextBucket extends cdk.Stack {
  public readonly textBucket: s3.Bucket;

  constructor(scope: Construct, id: string) {
    super(scope, id);

    this.textBucket = new s3.Bucket(this, "MyTextBucket", {
      blockPublicAccess: BlockPublicAccess.BLOCK_ALL,
      encryption: BucketEncryption.S3_MANAGED,
      versioned: false,
    });
  }
}
