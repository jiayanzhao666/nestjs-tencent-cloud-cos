import { Inject, Injectable, Logger } from "@nestjs/common";

import COS from "cos-nodejs-sdk-v5";

import { TENCENTCLOUD_COS_MODULE_CONFIG } from "./tencent-cloud-cos.constant";
import { TencentCloudCosConfig, UploadedFileMetadata } from "./interfaces";

@Injectable()
export class TencentCloudCosService {
  private cosClient: COS;

  constructor(
    @Inject(TENCENTCLOUD_COS_MODULE_CONFIG)
    private readonly config: TencentCloudCosConfig
  ) {
    this.cosClient = new COS(this.config.options);
    Logger.log("TencentCloud COS module initialized!", "TencentCloudCOSModule");
  }

  putObject(params: COS.PutObjectParams) {
    return this.cosClient.putObject(params);
  }
}
