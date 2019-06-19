"use strict";
// Start Mowing -> Pending
// Complete mowing -> Resolve
// Did not  complete mowing process -> Reject
let performUpload = function (imageStatus) {
    return new Promise((resolve) => {
        console.log(`Status: ${imageStatus}`);
        setTimeout(() => {
            resolve({ imageStatus: imageStatus });
        }, 1000);
    });
};
var upload;
var compress;
var transfer;
performUpload('uploading...')
    .then((res) => {
    upload = res;
    return performUpload('compressing...');
})
    .then((res) => {
    compress = res;
    return performUpload('transferinfg...');
})
    .then((res) => {
    transfer = res;
    return performUpload('Image upload completed');
});
//# sourceMappingURL=029_promise.js.map