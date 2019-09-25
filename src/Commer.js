//��������
Array.prototype.swap = function (i, j) {
	var temp = this[i];
	this[i] = this[j];
	this[j] = temp;
}
//����
function sleep(n) {
	var start = new Date().getTime(); //������ʼʱ��ĺ�����
	while (true) {
		var time = new Date().getTime(); //ÿ��ִ��ѭ��ȡ��һ�ε�ǰʱ��ĺ�����
		if (time - start > n) { //�����ǰʱ��ĺ�������ȥ��ʼʱ��ĺ��������ڸ����ĺ�������������ѭ��
			break;
		}
	}
}
//ð��
function maopao(arr) {

	var data = [];
	for (var i = arr.length - 1; i > 0; --i) {
		for (var j = 0; j < i; ++j) {

			if (arr[j] > arr[j + 1])
				arr.swap(j, j + 1);
		}
		let temp = arr.concat();
		data.push(temp);
	}
	return data;

}
//ѡ������
function selectionSort(arr) {

	let data = [];
	for (var i = 0; i < arr.length; ++i) {
		var index = i;
		for (var j = i + 1; j < arr.length; ++j) {
			if (arr[j] < arr[index])
				index = j;
		}
		arr.swap(i, index);
		let temp = arr.concat();
		data.push(temp);
	}
	return data;
}



//��������
function insertionSort(arr) {
	for (var i = 1; i < arr.length; ++i) {
		var j = i,
			value = arr[i];
		while (j > 0 && arr[j - 1] > value) {
			arr[j] = arr[j - 1];
			--j;
		}
		arr[j] = value;
		let temp = arr.concat();
		data.push(temp);
	}
	return data;

}
//ϣ������
function shellSort(arr) {
	for (var step = arr.length >> 1; step > 0; step >>= 1) {
		//alert(step >>= 1);
		for (var i = 0; i < step; ++i) {
			for (var j = i + step; j < arr.length; j += step) {
				var k = j,
					value = arr[j];
				while (k >= step && arr[k - step] > value) {
					arr[k] = arr[k - step];
					k -= step;
				}
				arr[k] = value;
			}
			let temp = arr.concat();
			data.push(temp);
		}
	}
	return data;
}


function quickSort(num, from, to, data) {
	var from = from != undefined ? from : 0; //��ʼλ��
	var to = to != undefined ? to : num.length - 1; //����λ��
	var i = from;
	var j = to;
	var key = num[from]; //��׼ֵ
	//var temp; // ��ʱ�������������ֽ���
	if (i >= j) {
		return num; //�ݹ����
	}
	while (i < j) { // ���ѭ������i=jʱ��ѭ�����������һ�ֵ����ֽ���
		//j��Ŀ����Ѱ�ұȻ�׼ֵС��ֵ��
		//�ʵ�num[j]��ֵ���ڻ�׼ֵʱ����Ҫ�����ƶ�����j--��
		////ֱ���ҵ�С�ڻ�׼ֵ��������˳�ѭ��������¼�´�ʱ��jֵ��
		while (i < j && num[j] > key) {
			j--;
		}
		//i��Ŀ����Ѱ�ұȻ�׼ֵ���ֵ��
		//�ʵ�num[j]��ֵС�ڻ�׼ֵʱ����Ҫ�����ƶ�����i++��
		//ֱ���ҵ����ڻ�׼ֵ��������˳�ѭ��������¼�´�ʱ��iֵ��
		while (i < j && num[i] <= key) {
			i++;
		}
		//��i��j��ֵ����
		if (i < j) {
			num.swap(i, j);
			// temp = num[i];
			// num[i] = num[j];
			// num[j] = temp;
			let temp = num.concat();
			data.push(temp);
		}
	}
	//���i���׼ֵ��������ɵ�һ�ֵ����ֲ���
	num[from] = num[i];
	num[i] = key;
	let t = num.concat();
	data.push(t);
	//ʹ�õݹ��㷨���������±��from~i-1�Ĳ��֣�
	//��С�ڻ�׼ֵ����߲��ֽ�������
	quickSort(num, from, i - 1,data);
	//ʹ�õݹ��㷨���������±��i+1~to�Ĳ��֣�
	//��С�ڻ�׼ֵ���ұ߲��ֽ�������
	return quickSort(num, i + 1, to,data);

}



//��ջ��������
Array.prototype.stackQuickSort = function () {
	var stack = [0, this.length - 1];
	while (stack.length > 0) {
		var e = stack.pop(),
			s = stack.pop();
		if (s >= e)
			continue;
		this.swap((s + e) >> 1, e);
		var index = s - 1;
		for (var i = s; i <= e; ++i) {
			if (this[i] <= this[e])
				this.swap(i, ++index);
		}
		stack.push(s, index - 1, index + 1, e);
	}
}
//�鲢����
Array.prototype.mergeSort = function (s, e, b) {
	if (s == null)
		s = 0;
	if (e == null)
		e = this.length - 1;
	if (b == null)
		b = new Array(this.length);
	if (s >= e)
		return;
	var m = (s + e) >> 1;
	this.mergeSort(s, m, b);
	this.mergeSort(m + 1, e, b);
	for (var i = s, j = s, k = m + 1; i <= e; ++i)
		b[i] = this[(k > e || j <= m && this[j] < this[k]) ? j++ : k++];
	for (var i = s; i <= e; ++i)
		this[i] = b[i];
}
//������
Array.prototype.heapSort = function () {
	for (var i = 1; i < this.length; ++i) {
		for (var j = i, k = (j - 1) >> 1; k >= 0; j = k, k = (k - 1) >> 1) {
			if (this[k] >= this[j])
				break;
			this.swap(j, k);
		}
	}
	for (var i = this.length - 1; i > 0; --i) {
		this.swap(0, i);
		for (var j = 0, k = (j + 1) << 1; k <= i; j = k, k = (k + 1) << 1) {
			if (k == i || this[k] < this[k - 1])
				--k;
			if (this[k] <= this[j])
				break;
			this.swap(j, k);
		}
	}
}