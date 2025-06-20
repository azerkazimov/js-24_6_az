class StudentCRUD {
            constructor() {
                this.apiUrl = 'https://jsonplaceholder.typicode.com/users';
                this.students = [];
                this.filteredStudents = [];
                this.currentStudent = null;
                this.isEditing = false;
            }

            async loadStudents() {
                try {
                    document.getElementById('loadingContainer').style.display = 'block';
                    document.getElementById('studentsContainer').style.display = 'none';
                    
                    const response = await fetch(this.apiUrl);
                    if (!response.ok) {
                        throw new Error(`HTTP xətası! status: ${response.status}`);
                    }
                    
                    const users = await response.json();
                    
                    // JSONPlaceholder məlumatlarını tələbə formatına çeviririk
                    this.students = users.map(user => ({
                        id: user.id,
                        name: user.name,
                        email: user.email,
                        phone: user.phone,
                        website: user.website,
                        city: user.address.city,
                        company: user.company.name
                    }));
                    
                    this.filteredStudents = [...this.students];
                    this.updateStats();
                    this.displayStudents();
                    
                } catch (error) {
                    console.error('Tələbələr yüklənərkən xəta:', error);
                    this.showError('Tələbələr yüklənərkən xəta baş verdi!');
                } finally {
                    document.getElementById('loadingContainer').style.display = 'none';
                }
            }

            async createStudent(studentData) {
                try {
                    const response = await fetch(this.apiUrl, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            name: studentData.name,
                            email: studentData.email,
                            phone: studentData.phone,
                            website: studentData.website,
                            address: { city: studentData.city },
                            company: { name: studentData.company }
                        })
                    });

                    if (!response.ok) {
                        throw new Error('Tələbə yaradılarkən xəta baş verdi');
                    }

                    const newUser = await response.json();
                    
                    // Yeni tələbəni local array-ə əlavə edirik
                    const newStudent = {
                        id: Date.now(), // Real API-də server tərəfindən ID verilir
                        ...studentData
                    };
                    
                    this.students.unshift(newStudent);
                    this.filteredStudents = [...this.students];
                    this.updateStats();
                    this.displayStudents();
                    
                    this.showSuccess('Tələbə uğurla əlavə edildi!');
                    return newStudent;
                    
                } catch (error) {
                    console.error('Tələbə yaradılarkən xəta:', error);
                    this.showError('Tələbə əlavə edilərkən xəta baş verdi!');
                    throw error;
                }
            }

            async updateStudent(id, studentData) {
                try {
                    const response = await fetch(`${this.apiUrl}/${id}`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            id: id,
                            name: studentData.name,
                            email: studentData.email,
                            phone: studentData.phone,
                            website: studentData.website,
                            address: { city: studentData.city },
                            company: { name: studentData.company }
                        })
                    });

                    if (!response.ok) {
                        throw new Error('Tələbə yenilənərkən xəta baş verdi');
                    }

                    // Local array-də yeniləmə
                    const studentIndex = this.students.findIndex(s => s.id === id);
                    if (studentIndex !== -1) {
                        this.students[studentIndex] = { id, ...studentData };
                        this.filteredStudents = [...this.students];
                        this.updateStats();
                        this.displayStudents();
                    }
                    
                    this.showSuccess('Tələbə məlumatları uğurla yeniləndi!');
                    
                } catch (error) {
                    console.error('Tələbə yenilənərkən xəta:', error);
                    this.showError('Tələbə yenilənərkən xəta baş verdi!');
                    throw error;
                }
            }

            async deleteStudent(id) {
                if (!confirm('Bu tələbəni silmək istədiyinizdən əminsiniz?')) {
                    return;
                }

                try {
                    const response = await fetch(`${this.apiUrl}/${id}`, {
                        method: 'DELETE'
                    });

                    if (!response.ok) {
                        throw new Error('Tələbə silinərkən xəta baş verdi');
                    }

                    // Local array-dən silmə
                    this.students = this.students.filter(s => s.id !== id);
                    this.filteredStudents = this.filteredStudents.filter(s => s.id !== id);
                    this.updateStats();
                    this.displayStudents();
                    
                    this.showSuccess('Tələbə uğurla silindi!');
                    
                } catch (error) {
                    console.error('Tələbə silinərkən xəta:', error);
                    this.showError('Tələbə silinərkən xəta baş verdi!');
                }
            }

            searchStudents(searchTerm) {
                if (!searchTerm.trim()) {
                    this.filteredStudents = [...this.students];
                } else {
                    const term = searchTerm.toLowerCase();
                    this.filteredStudents = this.students.filter(student =>
                        (student.name?.toLowerCase() || '').includes(term) ||
                        (student.email?.toLowerCase() || '').includes(term) ||
                        (student.city?.toLowerCase() || '').includes(term) ||
                        (student.company?.toLowerCase() || '').includes(term) ||
                        (student.phone?.toLowerCase() || '').includes(term)
                    );
                }
                this.updateStats();
                this.displayStudents();
            }

            displayStudents() {
                const container = document.getElementById('studentsContainer');
                const noResults = document.getElementById('noResults');
                
                if (this.filteredStudents.length === 0) {
                    container.style.display = 'none';
                    noResults.style.display = 'block';
                    return;
                }
                
                container.style.display = 'grid';
                noResults.style.display = 'none';
                
                container.innerHTML = this.filteredStudents.map(student => this.createStudentCard(student)).join('');
            }

            createStudentCard(student) {
                const initials = student.name ? student.name.split(' ').map(n => n[0]).join('').substring(0, 2) : '?';
                
                return `
                    <div class="student-card">
                        <div class="student-header">
                            <div class="student-avatar">${initials}</div>
                            <div class="student-info">
                                <h3>${student.name || 'Adı məlum deyil'}</h3>
                                <div class="student-id">ID: ${student.id}</div>
                            </div>
                        </div>
                        <div class="student-details">
                            <div class="detail-item">
                                <span class="detail-icon">📧</span>
                                <span class="detail-text">${student.email || 'Email məlum deyil'}</span>
                            </div>
                            <div class="detail-item">
                                <span class="detail-icon">📱</span>
                                <span class="detail-text">${student.phone || 'Telefon məlum deyil'}</span>
                            </div>
                            <div class="detail-item">
                                <span class="detail-icon">🏙️</span>
                                <span class="detail-text">${student.city || 'Şəhər məlum deyil'}</span>
                            </div>
                            <div class="detail-item">
                                <span class="detail-icon">🏢</span>
                                <span class="detail-text">${student.company || 'Təşkilat məlum deyil'}</span>
                            </div>
                            ${student.website ? `
                                <div class="detail-item">
                                    <span class="detail-icon">🌐</span>
                                    <span class="detail-text">
                                        <a href="http://${student.website}" target="_blank">${student.website}</a>
                                    </span>
                                </div>
                            ` : ''}
                        </div>
                        <div class="student-actions">
                            <button class="btn btn-warning btn-sm" onclick="editStudent(${student.id})">
                                ✏️ Redaktə
                            </button>
                            <button class="btn btn-danger btn-sm" onclick="deleteStudent(${student.id})">
                                🗑️ Sil
                            </button>
                        </div>
                    </div>
                `;
            }

            updateStats() {
                document.getElementById('totalStudents').textContent = this.students.length;
                document.getElementById('searchResults').textContent = this.filteredStudents.length;
            }

            showSuccess(message) {
                // Sadə alert istifadə edirik, real layihədə toast notification olardı
                alert('✅ ' + message);
            }

            showError(message) {
                alert('❌ ' + message);
            }
        }

        // Global instance
        const studentCRUD = new StudentCRUD();

        // Event listeners
        document.addEventListener('DOMContentLoaded', function() {
            studentCRUD.loadStudents();
            
            // Axtarış input-u
            const searchInput = document.getElementById('searchInput');
            searchInput.addEventListener('input', function() {
                studentCRUD.searchStudents(this.value);
            });
            
            // Form submit
            document.getElementById('studentForm').addEventListener('submit', function(e) {
                e.preventDefault();
                saveStudent();
            });
            
            // Modal-ı bağlamaq üçün kənarda klik
            document.getElementById('studentModal').addEventListener('click', function(e) {
                if (e.target === this) {
                    closeModal();
                }
            });
        });

        // Global functions
        function loadStudents() {
            studentCRUD.loadStudents();
        }

        function openAddModal() {
            studentCRUD.isEditing = false;
            studentCRUD.currentStudent = null;
            
            document.getElementById('modalTitle').textContent = 'Yeni Tələbə Əlavə Et';
            document.getElementById('saveBtn').innerHTML = '💾 Saxla';
            
            // Formu təmizlə
            document.getElementById('studentForm').reset();
            
            document.getElementById('studentModal').style.display = 'block';
        }

        function editStudent(id) {
            const student = studentCRUD.students.find(s => s.id === id);
            if (!student) return;
            
            studentCRUD.isEditing = true;
            studentCRUD.currentStudent = student;
            
            document.getElementById('modalTitle').textContent = 'Tələbə Məlumatlarını Redaktə Et';
            document.getElementById('saveBtn').innerHTML = '✏️ Yenilə';
            
            // Formu doldur
            document.getElementById('studentName').value = student.name || '';
            document.getElementById('studentEmail').value = student.email || '';
            document.getElementById('studentPhone').value = student.phone || '';
            document.getElementById('studentWebsite').value = student.website || '';
            document.getElementById('studentCity').value = student.city || '';
            document.getElementById('studentCompany').value = student.company || '';
            
            document.getElementById('studentModal').style.display = 'block';
        }

        function deleteStudent(id) {
            studentCRUD.deleteStudent(id);
        }

        function closeModal() {
            document.getElementById('studentModal').style.display = 'none';
            document.getElementById('studentForm').reset();
            studentCRUD.currentStudent = null;
            studentCRUD.isEditing = false;
        }

        async function saveStudent() {
            const studentData = {
                name: document.getElementById('studentName').value.trim(),
                email: document.getElementById('studentEmail').value.trim(),
                phone: document.getElementById('studentPhone').value.trim(),
                website: document.getElementById('studentWebsite').value.trim(),
                city: document.getElementById('studentCity').value.trim(),
                company: document.getElementById('studentCompany').value.trim()
            };
            
            // Sadə validasiya
            if (!studentData.name || !studentData.email) {
                alert('❌ Ad və Email mütləqdir!');
                return;
            }
            
            try {
                if (studentCRUD.isEditing && studentCRUD.currentStudent) {
                    await studentCRUD.updateStudent(studentCRUD.currentStudent.id, studentData);
                } else {
                    await studentCRUD.createStudent(studentData);
                }
                closeModal();
            } catch (error) {
                // Xəta əvvəlcədən handle edilib
            }
        }

        // Keyboard shortcuts
        document.addEventListener('keydown', function(e) {
            // ESC açarı ilə modal-ı bağla
            if (e.key === 'Escape') {
                closeModal();
            }
            
            // Ctrl+N ilə yeni tələbə əlavə et
            if (e.ctrlKey && e.key === 'n') {
                e.preventDefault();
                openAddModal();
            }
            
            // Ctrl+R ilə yenilə
            if (e.ctrlKey && e.key === 'r') {
                e.preventDefault();
                loadStudents();
            }
        });