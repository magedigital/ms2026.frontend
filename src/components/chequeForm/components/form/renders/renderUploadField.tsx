import React from 'react';

import DashedBorder from '@components/dashedBorder/DashedBorder.tsx';
import Icon from '@components/icon/Icon.tsx';

import I from '../types.ts';

const renderUploadField: I['renderUploadField'] = function () {
    const { files } = this.state;
    const { mode } = this.props;

    if (mode !== 'typing') {
        return;
    }

    return (
        <label className="chequeForm__upload _FULL_W _COL _COL_CENTER _CLICK">
            <div className="chequeForm__uploadBorder">
                <DashedBorder />
            </div>
            <input
                type="file"
                multiple
                accept=".jpg,.jpeg,.png"
                onChange={this.uploadFile.bind(this)}
            />
            <div className="chequeForm__uploadFiles _ROW">
                {files.map((file) => (
                    <div className="chequeForm__uploadFile" key={file.id}>
                        <img src={file.src} alt="" className="chequeForm__uploadFilePreview" />
                        <div
                            className="chequeForm__uploadFileDelete _CLICK _COL _COL_CENTER"
                            onClick={(e) => {
                                e.stopPropagation();
                                e.preventDefault();

                                this.deleteFile(file.id);
                            }}
                        >
                            <i className="chequeForm__uploadFileDeleteIcon">
                                <Icon name="cookies-close" />
                            </i>
                        </div>
                    </div>
                ))}
            </div>
            <p className="chequeForm__uploadText">
                Приложи одно или несколько фото чека с&nbsp;фискальными данными
            </p>
        </label>
    );
};

export default renderUploadField;
